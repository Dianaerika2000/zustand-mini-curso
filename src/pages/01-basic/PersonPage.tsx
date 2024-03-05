import { WhiteCard } from '../../components';
import { usePersonStore } from '../../stores';



export const PersonPage = () => {
  const firstname = usePersonStore(state => state.firstname);
  const lastname = usePersonStore(state => state.lastname);

  const setFirstname = usePersonStore(state => state.setFirstname);
  const setLastname = usePersonStore(state => state.setLastname);
  return (
    <>
      <h1>Persona</h1>
      <p>Información que se compartirá a otro store, Session Storage y Firebase</p>
      <hr />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Nombre"
                    value={ firstname }
                    onChange={ (e) => setFirstname(e.target.value) }
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Apellido"
                    value={ lastname }
                    onChange={ (e) => setLastname(e.target.value) }
                  />
                </div>
              </div>
            </div>
  
            <pre className="bg-gray-200 p-5 rounded-[20px]">
              {
                JSON.stringify({
                  firstname,
                  lastname
                }, null, 2)
              }
            </pre>
          </form>
        </div>
      </WhiteCard>
    </>
  );
};