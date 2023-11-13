"use client";

import styles from "@/styles/home/Snippet.module.css";
import { Editor } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import {IoCopyOutline} from "react-icons/io5";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function Snippet() {
    const language = "TypeScript";
    const code = `const useFetch = <T>(url: string): FetchResult<T> => {
        const [data, setData] = useState<T | null>(null);
        const [loading, setLoading] = useState<boolean>(true);
        const [error, setError] = useState<Error | null>(null);
      
        const fetchData = (): Promise<void> => {
          setLoading(true);
      
          return fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw new Error('HTTP error! Status: $ {response.status}');
              }
              return response.json() as Promise<T>;
            })
            .then((result) => {
              setData(result);
              setLoading(false);
            })
            .catch((error) => {
              setError(error);
              setLoading(false);
            });
        };
      
        useEffect(() => {
          fetchData();
        }, [url]);
      
        return { data, loading, error, fetchData };
      };` as string;

    const [ style, setStyle ] = useState({})
    useEffect(() => {
        import('react-syntax-highlighter/dist/esm/styles/hljs/ir-black')
        .then(mod => setStyle(mod.default));
    })

    return (
        <section className={styles.snippet}>
            <section className={styles.snippetCode}>
                <section className={styles.snippetCodeHeader}>
                    <h4 className={styles.snippetCodeHeaderTitle}>Snippet of the week</h4>
                    <IoCopyOutline className={styles.snippetCodeHeaderIcon} />
                </section>
                <section className={styles.snippetCodeShow}>
                    {/* <SyntaxHighlighter 
                        language={language} 
                        style={style} 
                        customStyle={{
                            padding: "1rem",
                            borderRadius: "0 0 10px 10px",
                            fontSize: ".9rem"
                        }}
                        wrapLongLines={true}>
                        {code}
                    </SyntaxHighlighter> */}
                    <Editor 
                        defaultLanguage={language}
                        defaultValue={code}
                        value={code}
                        height={"26rem"} 
                        theme={"vs-dark"}
                    />
                </section>
            </section>
            <section className={styles.snippetFloat}>
                <section className={styles.snippetFloatHeader}>
                    <div></div>
                    <span className={styles.snippetFloatHeaderText}>React JS</span>
                </section>
                <section className={styles.snippetFloatContent}>
                    <h3 className={styles.snippetFloatContentTitle}>Data fetching with Javascript</h3>
                    <p className={styles.snippetFloatContentText}>This hook has implemented the best practices when you want to fetch data from an API into your project.</p>
                </section>
            </section>
        </section>
    )
}