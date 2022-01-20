import Chat from "./Chat"
import List from "./List"
import Nav from "./Nav"
import "../styles/main.css"
import { useEffect, useState } from "react"

const Main = () => {


    const[obj, setObj] = useState({})

    const[array] = useState([
        {
            name: "name2", 
            id: 1,
            chats: {
                from: [
                    {
                        name: "name1", 
                        texts: [
                            {
                                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, voluptates? Quae ullam velit consequatur animi dignissimos enim quaerat odit! Labore provident veniam nemo culpa temporibus error quibusdam sapiente ducimus enim?",
                                time: 1
                            }
                        ]
                    }
                ], 
                to: [
                    {
                        name: "name1",
                        texts: [
                            {
                                text: "hello!",
                                time: 0
                            },
                            {
                                text: "bye!!",
                                time: 2
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: "name3", 
            id: 2,
            chats: {
                from: [], 
                to: []
            }
        },
        {
            name: "name4", 
            id: 3,
            chats: {
                from: [], 
                to: []
            }
        },
        {
            name: "name5", 
            id: 4,
            chats: {
                from: [
                    {
                        name: "name1",
                        texts: [
                            {
                                text: "piss off!",
                                time: 0
                            },
                            {
                                text: "just kiddinnn!!",
                                time: 2
                            }
                        ]
                    }
                ], 
                to: [
                    {
                        name: "name1",
                        texts: [
                            {
                                text: "why?",
                                time: 1
                            },
                            {
                                text: "okay!",
                                time: 3
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: "name6", 
            id: 5,
            chats: {
                from: [], 
                to: []
            }
        },
        {
            name: "name7", 
            id: 6,
            chats: {
                from: [], 
                to: []
            }
        },
        {
            name: "name8", 
            id: 7,
            chats: {
                from: [], 
                to: []
            }
        },
        {
            name: "name9", 
            id: 8,
            chats: {
                from: [], 
                to: []
            }
        },
    ])

    // useEffect(() => {
    //     console.log(obj)
    // }, [obj])

    const[state, setState] = useState(false)

    const down = () => {
        const nav = document.querySelector(".nav") 
        const square = document.querySelector(".square")
        const main = document.querySelector(".main")
        if(!state) {
            main.style.height = "850px"
            nav.style.top = "0%"
            square.style.top = "800px"
        } else {
            main.style.height = "800px"
            nav.style.top = "-100%"
            square.style.top = "0"
        }
        setState(!state)
    }

    return (
        <div className="main">
            <div className="nav">
                <Nav />
            </div>
            <div onClick={() => down()} className="square"></div>
            <div className="twins">
                <div className="upper">
                    <h1>Chat</h1>
                </div>
                <div className="lower">
                    <div className="list">
                        <List array={array} setObj={setObj} className="people"/>
                    </div>
                    <div className="chat">
                        <Chat obj={obj}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main