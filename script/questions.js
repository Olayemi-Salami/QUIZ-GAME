
let questions =[
    {
        number: 1,
        question: "What is the primary key in a relational database?",
        answer:"A unique identifier for each row in a table",
        options:[
            "A unique identifier for each row in a table",
            "A foreign key",
            "A duplicate key",
           "A secondary key"
        ]
    },

    {
        number: 2,
        question: "Which SQL clause is used to filter the results of a query?",
        answer:"WHERE",
        options:[
            "GROUP BY",
            "ORDER BY",
            "WHERE",
           "HAVING"
        ]
    },

    {
        number: 3,
        question: "What is the purpose of indexing in a database?",
        answer:"To improve the speed of data retrieval",
        options:[
            "To slow down queries",
            "To improve the speed of data retrieval",
            "To store duplicate data",
           "To encrypt data"
        ]
    },

    {
        number: 4,
        question: "What type of join returns only matching rows from both tables?",
        answer:"INNER JOIN",
        options:[
            "LEFT JOIN",
            "FULL JOIN",
            "INNER JOIN",
           "RIGHT JOIN"
        ]
    },

    {
        number: 5,
        question: "Which SQL statement removes all records from a table without logging individual row deletions?",
        answer:"TRUNCATE",
        options:[
            "DELETE",
            "DROP",
            "TRUNCATE",
           "REMOVE"
        ]
    },

    {
        number: 6,
        question: "What is normalization in databases?",
        answer:"A unique identifier for each row in a table",
        options:[
            "A unique identifier for each row in a table",
            "A foreign key",
            "A duplicate key",
           "A secondary key"
        ]
    },

    {
        number: 7,
        question: "What is normalization in databases?",
        answer:"A process to improve integrity and reduce redundancy",
        options:[
            "A process to add redundancy",
            "A process to improve integrity and reduce redundancy",
            "A method for denormalizing data",
           "A way to delete duplicate rows"
        ]
    },

    {
        number: 8,
        question: "Which database model is best suited for handling hierarchical data?",
        answer:"Document-based",
        options:[
            "Relational",
            "Document-based",
            "Key-Value Store",
           "Flat-file"
        ]
    },

    {
        number: 9,
        question: "What is a foreign key in a relational database?",
        answer:"A unique identifier for each row in a table",
        options:[
            "A unique identifier within a table",
            "A key that creates a relationship between two tables",
            "A key that contains only NULL values",
            "A key that is always a primary key in another table"
        ]
    },

    {
        number: 10,
        question: "What does ACID stand for in databases?",
        answer:"Atomicity, Consistency, Isolation, Durability",
        options:[
            "Analytics, Consistency, Indexing, Durability",
             "Atomicity, Consistency, Isolation, Durability",
             "Automation, Compliance, Integration, Distribution",
             "Aggregation, Clustering, Isolation, Distribution"
        ]
    },

    {
        number: 11,
        question: "Which SQL command is used to add a new column to an existing table?",
        answer:"ALTER TABLE ADD COLUMN",
        options:[
            "ALTER TABLE ADD COLUMN",
            "INSERT COLUMN",
            "UPDATE TABLE",
            "MODIFY TABLE"
        ]
    },

    {
        number: 12,
        question: "What does ETL stand for?",
        answer:"Extract, Transform, Load",
        options:[
            "Extract, Transform, Load",
            "Export, Transfer, Load",
            "Extract, Transfer, Log",
            "Encode, Transform, Load"
        ]
    },

    {
        number: 13,
        question: "Which tool is commonly used for building data pipelines?",
        answer:"Apache Airflow",
        options:[
            "Apache Hadoop",
            "Apache Airflow",
            "MySQL",
           "PostgreSQL"
        ]
    },

    {
        number: 14,
        question: "What is a data pipeline?",
        answer:"A series of processes that automate data movement and transformation",
        options:[
            "A series of processes that automate data movement and transformation",
            "A tool to store relational data",
            "A visualization tool",
           "A programming language"
        ]
    },
    {
        number: 15,
        question: "Which ETL method is faster for loading large datasets?",
        answer:"A unique identifier for each row in a table",
        options:[
            "A unique identifier for each row in a table",
            "A foreign key",
            "A duplicate key",
           "A secondary key"
        ]
    },

    {
        number: 16,
        question: "Which SQL clause is used to filter the results of a query?",
        answer:"WHERE",
        options:[
            "GROUP BY",
            "ORDER BY",
            "WHERE",
           "HAVING"
        ]
    },

    {
        number: 17,
        question: "What is the purpose of indexing in a database?",
        answer:"To improve the speed of data retrieval",
        options:[
            "To slow down queries",
            "To improve the speed of data retrieval",
            "To store duplicate data",
           "To encrypt data"
        ]
    },

    {
        number: 18,
        question: "What type of join returns only matching rows from both tables?",
        answer:"INNER JOIN",
        options:[
            "LEFT JOIN",
            "FULL JOIN",
            "INNER JOIN",
           "RIGHT JOIN"
        ]
    },

    {
        number: 19,
        question: "Which SQL statement removes all records from a table without logging individual row deletions?",
        answer:"TRUNCATE",
        options:[
            "DELETE",
            "DROP",
            "TRUNCATE",
           "REMOVE"
        ]
    },

    {
        number: 20,
        question: "What is normalization in databases?",
        answer:"A unique identifier for each row in a table",
        options:[
            "A unique identifier for each row in a table",
            "A foreign key",
            "A duplicate key",
           "A secondary key"
        ]
    },

    {
        number: 21,
        question: "What is normalization in databases?",
        answer:"A process to improve integrity and reduce redundancy",
        options:[
            "A process to add redundancy",
            "A process to improve integrity and reduce redundancy",
            "A method for denormalizing data",
           "A way to delete duplicate rows"
        ]
    },

    {
        number: 22,
        question: "Which database model is best suited for handling hierarchical data?",
        answer:"Document-based",
        options:[
            "Relational",
            "Document-based",
            "Key-Value Store",
           "Flat-file"
        ]
    },

    {
        number: 23,
        question: "What is a foreign key in a relational database?",
        answer:"A unique identifier for each row in a table",
        options:[
            "A unique identifier within a table",
            "A key that creates a relationship between two tables",
            "A key that contains only NULL values",
            "A key that is always a primary key in another table"
        ]
    },

    {
        number: 24,
        question: "What does ACID stand for in databases?",
        answer:"Atomicity, Consistency, Isolation, Durability",
        options:[
            "Analytics, Consistency, Indexing, Durability",
             "Atomicity, Consistency, Isolation, Durability",
             "Automation, Compliance, Integration, Distribution",
             "Aggregation, Clustering, Isolation, Distribution"
        ]
    },

    {
        number: 25,
        question: "Which SQL command is used to add a new column to an existing table?",
        answer:"ALTER TABLE ADD COLUMN",
        options:[
            "ALTER TABLE ADD COLUMN",
            "INSERT COLUMN",
            "UPDATE TABLE",
            "MODIFY TABLE"
        ]
    },

    {
        number: 26,
        question: "What does ETL stand for?",
        answer:"Extract, Transform, Load",
        options:[
            "Extract, Transform, Load",
            "Export, Transfer, Load",
            "Extract, Transfer, Log",
            "Encode, Transform, Load"
        ]
    },

    {
        number: 27,
        question: "Which tool is commonly used for building data pipelines?",
        answer:"Apache Airflow",
        options:[
            "Apache Hadoop",
            "Apache Airflow",
            "MySQL",
           "PostgreSQL"
        ]
    },

    {
        number: 28,
        question: "What is a data pipeline?",
        answer:"A series of processes that automate data movement and transformation",
        options:[
            "A series of processes that automate data movement and transformation",
            "A tool to store relational data",
            "A visualization tool",
           "A programming language"
        ]
    },
    {
        number: 29,
        question: "What is the primary key in a relational database?",
        answer:"A unique identifier for each row in a table",
        options:[
            "A unique identifier for each row in a table",
            "A foreign key",
            "A duplicate key",
           "A secondary key"
        ]
    },

    {
        number: 30,
        question: "Which SQL clause is used to filter the results of a query?",
        answer:"WHERE",
        options:[
            "GROUP BY",
            "ORDER BY",
            "WHERE",
           "HAVING"
        ]
    },

    {
        number: 31,
        question: "What is the purpose of indexing in a database?",
        answer:"To improve the speed of data retrieval",
        options:[
            "To slow down queries",
            "To improve the speed of data retrieval",
            "To store duplicate data",
           "To encrypt data"
        ]
    },

    {
        number: 32,
        question: "What type of join returns only matching rows from both tables?",
        answer:"INNER JOIN",
        options:[
            "LEFT JOIN",
            "FULL JOIN",
            "INNER JOIN",
           "RIGHT JOIN"
        ]
    },

    {
        number: 33,
        question: "Which SQL statement removes all records from a table without logging individual row deletions?",
        answer:"TRUNCATE",
        options:[
            "DELETE",
            "DROP",
            "TRUNCATE",
           "REMOVE"
        ]
    },

    {
        number: 34,
        question: "What is normalization in databases?",
        answer:"A unique identifier for each row in a table",
        options:[
            "A unique identifier for each row in a table",
            "A foreign key",
            "A duplicate key",
           "A secondary key"
        ]
    },

    {
        number: 35,
        question: "What is normalization in databases?",
        answer:"A process to improve integrity and reduce redundancy",
        options:[
            "A process to add redundancy",
            "A process to improve integrity and reduce redundancy",
            "A method for denormalizing data",
           "A way to delete duplicate rows"
        ]
    },

    {
        number: 36,
        question: "Which database model is best suited for handling hierarchical data?",
        answer:"Document-based",
        options:[
            "Relational",
            "Document-based",
            "Key-Value Store",
           "Flat-file"
        ]
    },

    {
        number: 37,
        question: "What is a foreign key in a relational database?",
        answer:"A unique identifier for each row in a table",
        options:[
            "A unique identifier within a table",
            "A key that creates a relationship between two tables",
            "A key that contains only NULL values",
            "A key that is always a primary key in another table"
        ]
    },

    {
        number: 38,
        question: "What does ACID stand for in databases?",
        answer:"Atomicity, Consistency, Isolation, Durability",
        options:[
            "Analytics, Consistency, Indexing, Durability",
             "Atomicity, Consistency, Isolation, Durability",
             "Automation, Compliance, Integration, Distribution",
             "Aggregation, Clustering, Isolation, Distribution"
        ]
    },

    {
        number: 39,
        question: "Which SQL command is used to add a new column to an existing table?",
        answer:"ALTER TABLE ADD COLUMN",
        options:[
            "ALTER TABLE ADD COLUMN",
            "INSERT COLUMN",
            "UPDATE TABLE",
            "MODIFY TABLE"
        ]
    },

    {
        number: 40,
        question: "What does ETL stand for?",
        answer:"Extract, Transform, Load",
        options:[
            "Extract, Transform, Load",
            "Export, Transfer, Load",
            "Extract, Transfer, Log",
            "Encode, Transform, Load"
        ]
    },

    {
        number: 41,
        question: "Which tool is commonly used for building data pipelines?",
        answer:"Apache Airflow",
        options:[
            "Apache Hadoop",
            "Apache Airflow",
            "MySQL",
           "PostgreSQL"
        ]
    },

    {
        number: 42,
        question: "What is a data pipeline?",
        answer:"A series of processes that automate data movement and transformation",
        options:[
            "A series of processes that automate data movement and transformation",
            "A tool to store relational data",
            "A visualization tool",
           "A programming language"
        ]
    },

    {
        number: 43,
        question: "What is the primary key in a relational database?",
        answer:"A unique identifier for each row in a table",
        options:[
            "A unique identifier for each row in a table",
            "A foreign key",
            "A duplicate key",
           "A secondary key"
        ]
    },

    {
        number: 44,
        question: "Which SQL clause is used to filter the results of a query?",
        answer:"WHERE",
        options:[
            "GROUP BY",
            "ORDER BY",
            "WHERE",
           "HAVING"
        ]
    },

    {
        number: 45,
        question: "What is the purpose of indexing in a database?",
        answer:"To improve the speed of data retrieval",
        options:[
            "To slow down queries",
            "To improve the speed of data retrieval",
            "To store duplicate data",
           "To encrypt data"
        ]
    },

    {
        number: 46,
        question: "What type of join returns only matching rows from both tables?",
        answer:"INNER JOIN",
        options:[
            "LEFT JOIN",
            "FULL JOIN",
            "INNER JOIN",
           "RIGHT JOIN"
        ]
    },

    {
        number: 47,
        question: "Which SQL statement removes all records from a table without logging individual row deletions?",
        answer:"TRUNCATE",
        options:[
            "DELETE",
            "DROP",
            "TRUNCATE",
           "REMOVE"
        ]
    },

    {
        number: 48,
        question: "What is normalization in databases?",
        answer:"A unique identifier for each row in a table",
        options:[
            "A unique identifier for each row in a table",
            "A foreign key",
            "A duplicate key",
           "A secondary key"
        ]
    },

    {
        number: 49,
        question: "What is normalization in databases?",
        answer:"A process to improve integrity and reduce redundancy",
        options:[
            "A process to add redundancy",
            "A process to improve integrity and reduce redundancy",
            "A method for denormalizing data",
           "A way to delete duplicate rows"
        ]
    },

    {
        number: 50,
        question: "Which database model is best suited for handling hierarchical data?",
        answer:"Document-based",
        options:[
            "Relational",
            "Document-based",
            "Key-Value Store",
           "Flat-file"
        ]
    },
];