import { useEffect, useState } from "react"
import "../styles/chat.css"

const Chat = ({ obj }) => {

    const[comb, setComb] = useState([])

    useEffect(() => {
        console.log(obj)
        if(JSON.stringify(obj).length !== 2) {
            let to = [], from = []
            for(let i = 0; i < obj.chats.from.length; i++) {
                console.log(obj.chats.from[i].name)
                if(obj.chats.from[i].name === "name1") {
                    for(let j = 0; j < obj.chats.from[i].texts.length; j++) from = [...from, obj.chats.from[i].texts[j]]
                }
            }
            for(let i = 0; i < obj.chats.to.length; i++) {
                console.log(obj.chats.to[i].name)
                if(obj.chats.to[i].name === "name1") {
                    for(let j = 0; j < obj.chats.to[i].texts.length; j++) to = [...to, obj.chats.to[i].texts[j]]
                }
            }
            let arr = []
            let start1 = 0, start2 = 0
            while(start1 < to.length && start2 < from.length) {
                if(to[start1].time < from[start2].time) {
                    const cur = {
                        text: to[start1].text,
                        time: to[start1].time,
                        where: "to"
                    }
                    arr = [...arr, cur];
                    start1++;
                } else {
                    const cur = {
                        text: from[start2].text,
                        time: from[start2].time,
                        where: "from"
                    }
                    arr = [...arr, cur];
                    start2++;
                }
            }
            while(start1 < to.length) {
                const cur = {
                    text: to[start1].text,
                    time: to[start1].time,
                    where: "to"
                }
                arr = [...arr, cur];
                start1++;
            }
            while(start2 < from.length) {
                const cur = {
                    text: from[start2].text,
                    time: from[start2].time,
                    where: "from"
                }
                arr = [...arr, cur];
                start2++;
            }
            console.log(to, from)
            console.log(arr)
            setComb(arr)
        }
    }, [obj])

    return (
        <div className="chats">
            {JSON.stringify(obj).length === 2 ?
                <h1 style={{margin: "30px"}}>Start Chatting!</h1>
                :
                <>
                    <header>
                        <div className="info">
                            <div className="circle"></div>
                            <div className="name">{obj.name}</div>
                        </div>
                        <div className="action">
                            <div className="close">X</div>
                        </div>
                    </header>
                    <main>
                        {comb.map((options, id) => {
                            return (
                                <div key={id} className="chete">
                                    {options.where === "from" ?
                                        <div className="left">
                                            <div className="circle"></div>
                                            <p>{options.text}</p>
                                        </div>
                                        :
                                        <div className="right">
                                            <p>{options.text}</p>
                                            <div className="circle"></div>
                                        </div>
                                    }
                                </div>
                            )
                        })}
                    </main>
                    <footer>
                        <form>
                            <label className="text" >
                                <input type="text" placeholder="Write a message"/>
                                <p>Attach</p>
                            </label>
                            <label className="submit">
                                <input type="submit" value="Submit"/>
                            </label>
                        </form>
                    </footer>
                </>
            }
        </div>
    )
}

export default Chat