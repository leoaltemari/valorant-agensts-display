import { useParams } from 'react-router-dom';

import Header from '@components/Header/Header';
import ReturnButton from '@components/ReturnButton/Return-Button';
import { getAgentById } from '@services';

import './Agent.scss';


export default function Agent() {
  const { id } = useParams();
  const { data: agent, error, isFetching: loading } = getAgentById(id as string);

  return (
    <>
      <Header />

      <section className="container d-flex flex-column align-items-center py-5">
        <div className="w-100 mb-5">
          <ReturnButton />
        </div>

        <div className="bg-secondary border-primary card flex-row">
          <div className="p-5 border-end border-primary d-flex align-items-center">
            <h1 className="agent-name font-valorant m-0 text-primary">
              { agent?.displayName }
            </h1>
          </div>

          <article className="p-5 position-relative d-flex flex-column justify-content-between overflow-hidden">
            <div className="agent-role d-flex align-items-center">
              <img
                src={agent?.role.displayIcon}
                alt="Agent role icon"
                className="me-4"
              />

              <p className="text-white font-valorant fw-bolder m-0">
                { agent?.role.displayName}
              </p>
            </div>

            <p className="description m-0 my-5 text-white fw-bold w-50 h4">
              { agent?.description }
            </p>

            <img
              src={agent?.bustPortrait}
              alt="Agent bust portrait"
              className="position-absolute agent-image"
            />

            <div className="abilities-bg d-flex flex-wrap justify-content-between">
              {
                agent?.abilities.map((ability, i) => {
                  return (
                    <div
                      className={`
                        ability-card
                        d-flex
                        flex-column
                        align-items-center
                        ${i !== agent?.abilities.length-1 ? 'me-4' : ''}
                      `}
                    >
                      <img src={ability.displayIcon} alt="Ability icon" className="mb-4"/>
                      <p className="h5 font-valorant text-primary">{ ability.displayName }</p>
                      <p>{ ability.description }</p>
                    </div>
                  )
                })
              }
            </div>
          </article>
        </div>
      </section>
    </>
  );
}