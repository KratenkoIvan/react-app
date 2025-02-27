import { useEffect } from "react";

export function useTitle(title: string){
    // табуляция
    useEffect(() => {
            const originalTitle = document.title
            document.title = title
            // ниче не делает
            return () => {
              document.title = originalTitle
            }
    }, [])
}