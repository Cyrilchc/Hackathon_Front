import React from "react";
import axios from "axios";

const ExportToCSV = () => {
    const [data, setData] = React.useState([]);

    // Function export to CSV :
    const exportToCSV = (data, fileName) => {
        const csvData = data
            .map((group) => {
                console.log(group);

                return group.name;

                // return group.map((item) => {
                // return item.name;
                // });
            })
            .join("\n\n");

        const csv = `${csvData}`;
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(url);
    };

    React.useEffect(() => {
        axios.get("http://172.19.2.11:5000/api/Group/GetGroups/").then((res) => {
            setData(res.data);
        });
    }, []);

    console.log(data);

    return (
        <div>
            <button onClick={() => exportToCSV(data, "test.csv")}>Export to CSV</button>
        </div>
    );
};

export default ExportToCSV;
