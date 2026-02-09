import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className="h-screen w-full bg-black text-red-500 flex flex-col items-center justify-center p-4">
                    <p className="font-bold mb-2">3D Component Error:</p>
                    <pre className="text-xs max-w-full overflow-auto bg-gray-900 p-2 rounded border border-red-900">
                        {this.state.error?.message || "Unknown error"}
                    </pre>
                </div>
            );
        }

        return this.props.children;
    }
}
