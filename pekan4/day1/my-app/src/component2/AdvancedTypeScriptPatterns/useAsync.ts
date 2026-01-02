import { useState, useEffect, useCallback} from "react";

interface AsyncState<T> {
    data: T | null
    loading: boolean
    error: string | null
}

export function useAsync<T>(asyncFunction: () => Promise<T>) {
    const [state, setState] = useState<AsyncState<T>>({
        data: null,
        loading: true,
        error: null
    })

    const execute = useCallback(async () => {
       setState({ data: null, loading: true, error: null });
       try{
        const response = await asyncFunction()
        setState({ data: response, loading: false, error: null });
       } catch(err) {
        setState({
            data: null,
            loading: false,
            error: err instanceof Error ? err.message : 'Terjadi Kesalahan'
        })
       }
    }, [asyncFunction])

    useEffect(() => {
        execute()
    }, [execute])

    return {...state, refresh: execute };
}

