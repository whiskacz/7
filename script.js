const Cash = (props) =>{
    const value = (props.cash/props.ratio).toFixed(2)
    return(
    <div>{props.title} {value}</div>
)
}


class CurrencyExchange extends React.Component{
    state = {
        amount : "",
        ratioDolar : 4.0,
        ratioEuro : 4.5
        
    }

    handleChange =(e)=>{
        this.setState({
           amount :  e.target.value 
        })
    }

    render(){

        const {amount, ratioDolar, ratioEuro} = this.state;

        return(
            <>
            <label htmlFor="mainInput">Wpisz wartość do przeliczenia</label>
            <br />
            <input id="mainInput" type="number" value={this.state.amount} onChange={this.handleChange}/>
            <br />
            <Cash cash={amount} ratio={ratioDolar} title="Wartość w Dolarach : " />
            <Cash cash={amount} ratio={ratioEuro} title="Wartość w Euro : " />
            </>
        )
    }
}

ReactDOM.render(<CurrencyExchange />, document.getElementById('root'))