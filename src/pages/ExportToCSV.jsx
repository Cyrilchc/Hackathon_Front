import React from "react";
import axios from "axios";

const ExportToCSV = () => {
    const [data, setData] = React.useState([]);

    // Function export to CSV :
    const exportToCSV = (data, fileName) => {
        const csvData = data
            .map((group) => {
                const groupInfo = [group.id, group.name];
                const groupStudents = group.students.map((student) => {
                    return [
                        student.lastName,
                        student.surname,
                        student.grades.map((grade) => {
                            return [grade.score, grade.subject.name];
                        }),
                    ];
                });

                return [...groupInfo, ...groupStudents];
            })
            .join("\n");

        const blob = new Blob([csvData], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(url);
    };

    React.useEffect(() => {
        axios.get("http://172.19.2.11:5000/api/Group/GetGroup/1").then((res) => {
            setData(() => [res.data]);
        });
    }, []);

    console.log(data);

    // const [gradeId, setGradeId] = React.useState();

    // const deleteGrade = (id) => {
    //     axios
    //         .delete(`http://172.19.2.11:5000/api/Grade/DeleteGrade/${id}`)
    //         .then((res) => {
    //             console.log(res);

    //             if (res.request.status === `${/20[0-9]/}`) {
    //                 alert("Note supprimée avec succès");
    //                 window.location.reload();
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    // const updateGrade = (e) => {
    //     e.preventDefault();
    //     axios
    //         .put("http://172.19.2.11:5000/api/Grade/UpdateGrade/", {
    //             score: e.target.score.value,
    //             studentId: id,
    //             subjectId: subjectSelect,
    //         })
    //         .then((res) => {
    //             console.log(res);

    //             if (res.request.status === `${/20[0-9]/}`) {
    //                 alert("Note modifiée avec succès");
    //                 window.location.reload();
    //             }
    //         });
    // };

    return (
        <div>
            <button onClick={() => exportToCSV(data, "test.csv")}>Export to CSV</button>
        </div>
    );
};

export default ExportToCSV;
