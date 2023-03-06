const Cash = (props) =>{
    const value = (props.cash/props.ratio).toFixed(2)
    return(
    <div>{props.title} {value}</div>
)
}


class CurrencyExchange extends React.Component{
    state = {
        amount : "",    
    }
    currencies = [
        {
            id : 1,
            name: "dolar",
            ratio: 4.1,
            title: "Wartość w dolarach"
        },
        {
            id : 2,
            name: "euro",
            ratio: 4.6,
            title: "Wartość w dolarach"
        },
        {
            id : 3,
            name: "korona czeska",
            ratio: 1.5,
            title: "Wartość w czeskich koronach"
        }
    ]
    


    handleChange =(e)=>{
        this.setState({
           amount :  e.target.value 
        })
    }

    render(){

        const {amount} = this.state;
        const calculators = this.currencies.map(currency=>(
            <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} />
        )
    
        )

        return(
            <>
            <label htmlFor="mainInput">Wpisz wartość do przeliczenia</label>
            <br />
            <input id="mainInput" type="number" value={this.state.amount} onChange={this.handleChange}/>
            <br />
            {calculators}
            </>
            
        )
    }
}

ReactDOM.render(<CurrencyExchange />, document.getElementById('root'))