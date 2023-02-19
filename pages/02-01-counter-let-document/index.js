

const CounterLetDocumentPage = () => {

    const onClickCountUp = () => {
        const count = Number(document.getElementById("count").innerText) + 1;
        document.getElementById("count").innerText = count;
    };

    const onClickCountDown =() => {
        const count = Number(document.getElementById("count").innerText) - 1;
        document.getElementById("count").innerText = count;
    };

    return(
        <div>
            <div id="count">0</div>
            <button onClick={onClickCountUp}>카운트 +1</button>
            <button onClick={onClickCountDown}>카운트 -1</button>
        </div>
    );
    
};

export default CounterLetDocumentPage;