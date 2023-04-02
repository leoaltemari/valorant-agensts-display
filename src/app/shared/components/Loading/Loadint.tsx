import './Loading.scss';


export function Loading() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden"></span>
      </div>
      <h5 className="mt-3 d-flex text-primary">
        Carregando
        <div className="stage d-flex justify-content-center pt-2">
          <div className="dot-typing"></div>
        </div>
      </h5>
    </div>
  );
}