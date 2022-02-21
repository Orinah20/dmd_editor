import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from "@heroicons/react/solid"
import './App.css';
import Editor from "@monaco-editor/react";
import axios from "axios";

/*
const accessToken = 'LTFMOjpjM2IxNTU4ZGMxZDM1ZTBmNDRkMzZlMmM2OWVlZDAwODA2Mjc2N2RkN2UzNTMxMmVhNWQ4Y2E0MGY4NGVhZTkx'

const apiUrl = 'https://localhost:4200';

const authAxios = axios.create({
    baseURL:apiUrl,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    }
})
*/

/* const config = {
      method: 'get',
      url: '{{endpoint}}/master/applications/?page=-1',
      headers: {
          'AuthToken': '{{access_token}}',
          'RequestReference': 'bnnnnkkkmkk'
      }
  };

  axios(config)
      .then(function (response) {
          console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
          console.log(error);
      });

*/
/* const axios = require('axios');

 const config = {
     method: 'post',
     url: 'http://85.159.214.103:9001/api/rest',
     headers: {
         'AuthToken': 'LTFMOjpkMmQ2MzQ5MGRhNTI0NTNlZDgyODVjNzI5ZWE4MzQwODQyYjMxZTE2MjVkZjgwMGYzNzM1YWUzYzFiMDUzZmU3',
         'RequestReference': 'bnnnnkkkmkk'
     }
 };

 axios(config)
     .then(function (response) {
         console.log(JSON.stringify(response.data));
     })
     .catch(function (error) {
         console.log(error);
     });
*/
/*const api = 'http://85.159.214.103:9001/api/rest';
const token = JSON.parse(sessionStorage.getItem('data'));

axios.post(api, { headers: {"Authorization" : `Bearer ${token}`} })
    .then(res => {
        console.log(res.data);
        this.setState({
            items: res.data,  /!*set response data in items array*!/
            isLoaded: true,
            redirectToReferrer: false
        })
    })*/

// const [data,setData] = useState([]);
/*

    useEffect(() => {
        axios.post('http://85.159.214.103:9001/api/rest')
            .then(res => {
                console.log(res.data)
                // setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    ,[])
*/

/*const arr = data.map((data) => {
    return(
        <Menu.Item>

            {({active}) => (
                <li>
                    <ul>{data.id}</ul>
                </li>
            )}


        </Menu.Item>
    )
})*/


/*const [users, setUsers] = useState([]);
const [requestError, setRequestError] = useState();

const fetchData = useCallback(async () => {

    const result = await authAxios.get(`${apiUrl}/users/all`);
    setUsers(result.data);

})*/

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function App() {


    return (
        <div className="App">
            <header className="App-header flex-column">
                <div className="App-header_Name text-2xl"> DMD Editor</div>
            </header>
            <div>
            <div className="content-Header flex-row">
                <div className="side-Nav_header flex-column">
                    <div className="side-Nav_label flex-column text-2xl ">Applications</div>
                    <div className="side-Nav_content flex-column "/>

                </div>

                <div className="main-Content flex-column">
                    <div className="main-Content_title flex-row">
                        <div className=" main-Content_header-Name flex-row text-2xl items-center">Organisations
                        </div>
                        <div className=" main-Content_header-List flex-row">


                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button
                                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                        Choose
                                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>

                                                {({active}) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Choose
                                                    </a>
                                                )}

                                            </Menu.Item>

                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>

                    <div className="content flex-column text-2xl">
                        <div className="content-placeholder flex-row">
                            <Editor
                                defaultLanguage="javascript"
                            />

                        </div>
                    </div>
                    <div className="content-footer px-5 flex-row justify-end">
                        <button
                            className="border border-gray-500 hover:bg-gray-200 active:bg-gray-200 shadow-sm rounded-md cursor-pointer px-6 font-medium m-1.5">Validate
                        </button>
                        <button
                            className="border border-gray-500 hover:bg-gray-200 active:bg-gray-200 shadow-sm rounded-md cursor-pointer px-6 font-medium m-1.5">Submit
                        </button>
                    </div>
                </div>

            </div>

            </div>
        </div>
    );
}

export default App;
