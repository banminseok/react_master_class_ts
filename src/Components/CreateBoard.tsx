import { useForm, ValidateResult } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { BoardsCreateSelector, BoardState } from "../atoms";

interface IForm {
  boardId: string;
}
const Form = styled.form`
width: 100%;
display: flex;
  justify-content: center;
  padding-bottom: 10px;
  input {
    font-size: 16px;
    border: 1 solid tomato;
    background-color: white;
    width: 50%;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    margin: 0 auto;
  }
`;

export function CreateBoard() {
  const [boards, setBoards] = useRecoilState(BoardState);
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<IForm>();
  const [boardList, setBoardCreate] = useRecoilState(BoardsCreateSelector);
  const existsBoardId = (boardId: string) => {
    if (boards.findIndex(e => e === boardId) > 0) {
      return "현재 사용중인 Board 명 입니다.";
    }
    return true;
  }
  const onValid = ({ boardId }: IForm) => {

    setBoardCreate(boardId);
    setValue("boardId", "");
  }
  const onError = (error: any) => {
    //console.log('error:', error);
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onValid, onError)}>
        <input
          {...register("boardId", {
            required: { value: true, message: "Board명을 입력하세요." },
            validate: existsBoardId
          })}
          type="text"
          placeholder={`Create Board ...`}
        />
        {errors.boardId && <p>{errors.boardId.message}</p>}
      </Form>
    </>
  );
}

export default CreateBoard;


