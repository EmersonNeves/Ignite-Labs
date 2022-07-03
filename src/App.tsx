import { Router } from "./Router";


function App() {
  // useEffect(() => {                |
  //   client.query({                 | A requisição pode ser feita desta maneira,
  //     query: GET_LESSONS_QUERY     | mas será utilizado um hook, useQuery do próprio
  //   }).then(res=>{                 | @apollo/client
  //     console.log(res.data);       |
  //   });                            |
  // }, []);                          |

  return (
    <div>
      <Router/>
    </div>
  );
}

export default App;
