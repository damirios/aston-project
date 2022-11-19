import { Component } from "react";
import { NotFound } from "./NotFound";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <NotFound error={true} />
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;