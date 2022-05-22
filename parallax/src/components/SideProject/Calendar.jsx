const Dummy = [{
  name: 'T1',
  id: 'Person 1',
  subject: 'Math',
  levels: [7,8,9],
},
{
  name: 'T2',
  id: 'Person 2',
  subject: 'Eng',
  levels: [7,9,12],
},
{
  name: 'T3',
  id: 'Person 3',
  subject: 'Phys',
  levels: [7,8,11],
},
]


const ClassesDummy = {
  level: '8',
}


const Calendar = () =>{
return( <ul>{Dummy.map(e => <li key={e.id}>{e.name}-{e.levels} {e.subject}</li>)
}</ul>);

}

export default Calendar;