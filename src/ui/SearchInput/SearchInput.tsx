import { FormEvent, FormEventHandler, useId } from "react";
import "./styles.scss";

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "onSubmit"
  > {
  onSubmit: (q: string) => void;
}

function SearchInput({ onSubmit, ...rest }: Props) {
  const id = useId();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!e.target) return;
    const form = new FormData(e.target as HTMLFormElement);

    const searchText = form.get("search") as string;

    if (searchText?.length) {
      onSubmit(searchText);
    }
  };

  const handleClickWrapper = () => document.getElementById(id)?.focus();

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-input" onClick={handleClickWrapper}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input {...rest} autoComplete="off" id={id} name="search" />
      </div>
    </form>
  );
}
export default SearchInput;
