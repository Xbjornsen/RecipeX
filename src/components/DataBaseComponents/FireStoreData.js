import React from "react";
import useGetData from "../../hooks/useGetData";
import Update from "./Update";


export default function FireStoreData() {
    const [documents] = useGetData();
    
    return(
        <div>
            <span>Values</span>
            {documents.map((documents) => (
                <div key={documents.id}>
                    <div>
                        Document: {documents.id} Value: {documents.value}
                    </div>
                    <Update doc={documents.id} />
                </div>
            ))}
        </div>    
    );
};