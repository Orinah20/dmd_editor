
import './App.css';
import {useCallback, useEffect, useState} from "react";
import axios from 'axios'

function App() {
/*
    const config = {
        method: 'post',
        url: 'http://85.159.214.103:8105/api/rest/o/token?username=admin@fcbs.co.ke&grantType=password&client=PORTAL&captcha=737626&organizationCode=FLEXICORE',
        headers: {
            'AuthToken': 'MmQ3ZjQwYjU1ZGU3OTc4NTJkZWQwZGUzYjhmMGE1MTZkMWYzZjMyZmRmMjliYmFhY2QxNjdlOTRiNjYyNGNiNQ',
            'RequestReference': 'bnnnnkkkmkk'
        }
    };

    useEffect(() =>{
            axios(config)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err)
                })
        }
        , [])*/

    let [responseData, setResponseData] = useState('')

    const Data = {
        method: 'get',
        url: 'http://85.159.214.103:8105/api/rest/master/applications/?page=-1',
        headers: {
            'AuthToken': 'LTFMOjo1YTUxYjhiOTIwYWZmZWIxY2ZjNTkxMzM5YTAwNTUyNzBhMTUwYzg0NjdkMWJjNDNmYmNjYzZhZDZlMGNkMDJm',
            'RequestReference': 'bnnnnkkkmkk'
        }
    }

    const fetchData = useCallback(() => {
      axios(Data)
          .then(response => {
              console.log(response)
              setResponseData(response.data)
              }
          )
          .catch(error => {
              console.log(error)
          })
    },[])


    useEffect(() =>{
        fetchData()
    },[fetchData])


    return (
        <div className="App">
            <header className="App-header">
                <h1>Fetching Data with React Hooks</h1>
                <button type='button' onClick={fetchData}>Click for Data</button>
                <main>
                    {responseData &&
                        <blockquote>
                            "{responseData && responseData.content}"
                        </blockquote>
                    }
                </main>
            </header>
        </div>
    );
}

export default App;
