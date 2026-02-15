import { Component, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    handleReload = () => {
        this.setState({ hasError: false, error: null });
        window.location.reload();
    };

    handleGoHome = () => {
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-4 relative overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[80px]" />
                        <div 
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px),
                                                 linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
                                backgroundSize: '60px 60px',
                            }}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md w-full text-center relative z-10"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                            className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center"
                        >
                            <AlertTriangle className="w-12 h-12 text-red-500" />
                        </motion.div>
                        
                        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
                            Oops! Something went wrong
                        </h2>
                        <p className="text-[var(--text-secondary)] mb-8">
                            An unexpected error occurred. Don't worry, it's not your fault!
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={this.handleReload}
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Reload Page
                            </button>
                            
                            <button
                                onClick={this.handleGoHome}
                                className="px-6 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)] font-semibold hover:border-[var(--accent)] transition-all flex items-center justify-center gap-2"
                            >
                                <Home className="w-4 h-4" />
                                Go Home
                            </button>
                        </div>

                        {import.meta.env.DEV && this.state.error && (
                            <details className="mt-8 text-left">
                                <summary className="cursor-pointer text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors">
                                    Error Details (Development Only)
                                </summary>
                                <pre className="mt-3 p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-xs text-red-500 overflow-auto max-h-48">
                                    {this.state.error.message}
                                    {'\n'}\n{this.state.error.stack}
                                </pre>
                            </details>
                        )}
                    </motion.div>
                </div>
            );
        }

        return this.props.children;
    }
}
