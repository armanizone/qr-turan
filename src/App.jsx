import turan from './assets/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

import voenkomatDolbaebi from './assets/download.pdf'

function App() {
  return (
    <>
      <div className="container pt-5 pb-5" style={{height: '100vh'}}>
        <div className="row align-items-center">
          <div className="col-12 pt-md-0 d-flex flex-column align-content-center">
            <div className="row justify-content-between align-items-center">
              <div className="col-12">
                  <a href="https://turan.edu.kz/" target="_link">
                      <img src={turan} alt="Логотип университета Туран" width="250" className="mb-4"/>
                  </a>
                <h1 className="fw-bold fs-3">Документ подлинный</h1>

                <h2 className="fw-light fs-5 pt-4 pb-2">
                    Данные документа можно сверить с таблицей ниже.
                </h2>

                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive mt-3">
                            <table className="table table-bordered align-middle">
                                <tbody><tr>
                                    <td>Наименование учебного заведения</td>
                                    <td>Учреждение «Университет «Туран»</td>
                                </tr>
                                <tr>
                                    <td>ID документа</td>
                                    <td>26158</td>
                                </tr>
                                <tr>
                                    <td>Дата создания</td>
                                    <td>04.02.2024</td>
                                </tr>
                                <tr>
                                    <td>Имя файла</td>
                                    <td>№26158 - Справка об обучении в университете «Туран» от 04.02.2024.pdf</td>
                                </tr>
                                
                                                                                                                <tr>
                                    <td>ФИО студента</td>
                                    <td>Абашкуров Арман Канжарбекович</td>
                                </tr>
                                                                        <tr>
                                    <td>Форма обучения</td>
                                    <td>Очная</td>
                                </tr>
                                                                        <tr>
                                    <td>Курс</td>
                                    <td>1</td>
                                </tr>
                                                                        <tr>
                                    <td>Срок обучения (год поступления и год окончания)</td>
                                    <td>4 года/лет (2024 - 2028)</td>
                                </tr>
                                                                        <tr>
                                    <td>Дата выдачи справки</td>
                                    <td>04.02.2024</td>
                                </tr>
                                                                                                            </tbody></table>

                                                                <table className="table table-bordered align-middle">
                                <tbody><tr>
                                    <th>Подразделение</th>
                                    <th>Должность /<br/>Фамилия Имя Отчество</th>
                                    <th>Выпoлнeнный процесс</th>
                                    <th>Дата и время</th>
                                </tr>

                                                                        <tr>
                                    <td>Ректорат</td>
                                    <td>Ректор / <br/> Алшанов Рахман Алшанович</td>
                                    <td>Подписан</td>
                                    <td>04.02.2024 14:45</td>
                                </tr>
                                
                            </tbody></table>
                            
                        </div>
                    </div>
                </div>

                <h2 className="fw-light fs-5 pt-4 pb-2">
                    Открыть или скачать оригинал документа можно ниже
                </h2>

                <div className="d-flex mt-3">
                  <a className="btn-blue btn-custom m-1" href={voenkomatDolbaebi} role="button">Открыть</a>
                  <a className="btn-yellow btn-custom m-1" download="" target="_blank" href={voenkomatDolbaebi} role="button">Скачать</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
