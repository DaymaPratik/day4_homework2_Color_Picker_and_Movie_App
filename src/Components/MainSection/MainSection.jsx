import './MainSection.css'
import Card from '../Card/Card';

const MainSection = () => {
    let dataAarr=[
        {code:'#32a852',name:'Green'},
        {code:'#ed2a1c',name:'Red'},
        {code:'#ed621c',name:'Orange'},
        {code:'#edd11c',name:'Yellow'},
        {code:'#1cedc7',name:'Aqua'},
        {code:'#1ca0ed',name:'Sky'},
        {code:'#1c26ed',name:'Navy'},
        {code:'#961ced',name:'Purple'},
        {code:'#ed1cdf',name:'Pink'},
        {code:'#ff85c2',name:'Light Pink'},
        {code:'#020005',name:'Black'},
        {code:'#fab514',name:'Pale Yellow'},
        {code:'#572b2a',name:'Brown'},
        {code:'#3f572a',name:'Dark Green'},
        {code:'#5a3b7d',name:'Voilet'},
        {code:'#608d91',name:'Cat Blue'}
    ];
    return (
        <main className='card-box'>
            {dataAarr.map((item) =>{
                // console.log(item);
                // console.log(item.name);
                return <Card arr={item} key={item.name}/>
            })}
           
        </main>
    );
}

export default MainSection;
