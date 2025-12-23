import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {hasError : false}
    }

    static getDerivedStateFromError(){
        return { hasError: true}
    }

    componentDidCatch(error,info){
        console.error("ErrorBoundary caught:", error,info);
    }

    render(){
        if(this.state.hasError){
            return <h3>Terjadi Kesalahan. Silahkan Refresh Halaman</h3>
        }

        return this.props.children
    }
}

export default ErrorBoundary