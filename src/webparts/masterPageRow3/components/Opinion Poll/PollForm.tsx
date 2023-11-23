// import { SPFI } from '@pnp/sp';
// import * as React from 'react'
// import { AiFillPlusCircle, AiFillDelete } from "react-icons/ai";
// import { getSP } from '../../pnpConfig';
// import { IItemAddResult } from '@pnp/sp/items';
// import './pollForm.scss'

// const PollForm = (props: any) => {
//   var idnext: number;
//   const [question, setQuestion] = React.useState<any>();
//   const [choice, setChoices] = React.useState<any>([]);
//   const [choiceobj, setchoiceobj] = React.useState<any>([])
//   const [Nextid, setNextId] = React.useState<any>();
//   const createobj = (ch: any) => {
//     setchoiceobj((prev: any) => [...prev, { id: 0, text: ch, votes: 0, percentage: 0 }])
//   }
//   const deleteChoice = (itm: any) => {
//     if (choiceobj.includes(itm)) {
//       setchoiceobj(choiceobj.filter((x: any) => x !== itm))
//     }
//   }
//   const renderChoice = () => {

//     return (
//       choiceobj.map((x: any) => {
//         return (<div className="choicelabel"><p>{x.text}</p><AiFillDelete className='addbtn' onClick={() => { deleteChoice(x) }} /></div>)
//       })
//     )
//   }

//   const getLatestID = async () => {
//     let _sp: SPFI = getSP(props.context);
//     const list = await _sp.web.lists.getByTitle("OpinionPole").items.select("QuestionId").top(1).orderBy("Modified", false)()
//     console.log(list);

//     list.map((x: any) => {
//       idnext = parseInt(x.QuestionId) + 1;
//       setNextId(idnext)
//     })
//   }

//   const submitObj = async () => {
//     let _sp: SPFI = getSP(props.context);
//     const iar: IItemAddResult = await _sp.web.lists.getByTitle("OpinionPole").items.add({
//       Title: "PollItem",
//       QuestionName: question,
//       Choices: JSON.stringify(choiceobj),
//       QuestionId: Nextid
//     });
//     console.log(iar);
//   }


//   React.useEffect(() => {
//     renderChoice();
//     getLatestID();

//   }, [choiceobj])

//   React.useEffect(() => {
//     getLatestID()
//   }, [])

//   return (

//     <div className='formcontainer'>
//       <div className="formtitle"><h3>New Poll</h3></div>
//       <form className='newPollForm'>
//         <label>Enter your Question: </label><input type='text' onChange={(e) => { setQuestion(e.target.value) }} />

//         <label>Add Choices</label><div><input type='text' onChange={(e) => { setChoices(e.target.value) }} /><AiFillPlusCircle className='addbtn' size={20} onClick={() => choice.length == 0 ? window.alert("enter choice") : createobj(choice)} /></div>
//       </form>

//       {choiceobj.length > 0 ? <div className="formfield">{renderChoice()}</div> : <div className="formfieldempty">Enter Choices</div>}
//       <button className='createBtn' onClick={submitObj}>Create Poll</button>
//     </div>
//   )
// }

// export default PollForm 
