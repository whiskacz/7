const Cash = (props) =>{
    const value = (props.cash/props.ratio * props.price).toFixed(2)
    return(
    <div>{props.title} {value}</div>
)
}


class CurrencyExchange extends React.Component{
    state = {
        amount : "",    
        product : "gas"
    }

    static defaultProps = {
    currencies : [
        {
            id : 1,
            name: "zloty",
            ratio: 1,
            title: "Wartość w zlotowkach"
        },
        {
            id : 2,
            name: "dolar",
            ratio: 4.1,
            title: "Wartość w dolarach"
        },
        {
            id : 3,
            name: "euro",
            ratio: 4.6,
            title: "Wartość w dolarach"
        },
        {
            id : 4,
            name: "korona czeska",
            ratio: 1.5,
            title: "Wartość w czeskich koronach"
        }
    ],
    prices: {
        electricity: .51,
        gas: 4.75,
        water: 1.50,
    }
}


    handleChange =(e)=>{
        this.setState({
           amount :  e.target.value 
        })
    }
    handleProduct =(e)=>{
        this.setState({
           product :  e.target.value, 
           amount: ""
        })
    }
    insertSuffix(select){
        if(select === "electricity") return <em>kWh</em>
        else if(select === "gas") return <em>m3</em>
        else if(select === "water") return <em>litres</em>
        else return null
    }
    selectPrice(select){
        return this.props.prices[select]
      
    }


    render(){

        const {amount} = this.state;
        const calculators = this.props.currencies.map(currency=>(
            <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} price={this.selectPrice(this.state.product)}/>
        )
    
        )

        return(
            <>
            <label>Wybierz produkt</label>
            <br />
            <select value={this.state.product} onChange={this.handleProduct}>
                <option value="gas">GAS</option>
                <option value="electricity">ELECTRICITY</option>
                <option value="water">WATER</option>

            </select>
            <br />
            <input id="mainInput" type="number" value={this.state.amount} onChange={this.handleChange}/>
            {this.insertSuffix(this.state.product)}
            <br />
            {calculators}
            
            </>
            
        )
    }
}

ReactDOM.render(<CurrencyExchange />, document.getElementById('root'))