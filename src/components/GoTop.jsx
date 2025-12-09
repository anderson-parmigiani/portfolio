const GoTop = (props) => {
  return (
    <>
      <div className={props.showGoTop} onClick={props.scrollUp}>
        <button className="goTop" type="button"></button>
      </div>
    </>
  );
};

export default GoTop;
