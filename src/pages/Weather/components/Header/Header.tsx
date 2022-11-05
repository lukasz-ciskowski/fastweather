import SearchInput from "ui/SearchInput/SearchInput";
import "./styles.scss";

interface Props {
  onSearch: (q: string) => void;
  isLoading: boolean;
}

function Header({ onSearch, isLoading }: Props) {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/public/img/logo.png" alt="logo" width={130} height={32} />
      </div>
      <div className="header__search">
        <SearchInput
          placeholder="Wpisz miasto"
          onSubmit={onSearch}
          loading={isLoading}
        />
      </div>
    </header>
  );
}
export default Header;
