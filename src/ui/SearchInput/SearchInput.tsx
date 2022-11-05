import { FormEvent, FormEventHandler, useId } from "react";
import Loader from "ui/Loader/Loader";
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
  loading?: boolean;
}

function SearchInput({ onSubmit, loading, ...rest }: Props) {
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
    <div className="search-input" onClick={handleClickWrapper}>
      <form onSubmit={handleSubmit}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input {...rest} autoComplete="off" id={id} name="search" />
        {loading && (
          <div className="search-input__loader">
            <Loader />
          </div>
        )}
      </form>
    </div>
  );
}
export default SearchInput;
