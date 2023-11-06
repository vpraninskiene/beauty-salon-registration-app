import "../Button/Button.css"

export const Button = ({ theme, title }) => {
    return (
      <>
        {theme ? (
          <button className={`main-button ${theme}`}>{title}</button>
        ) : null}
      </>
    );
  };