
let company_drives = [
    {
        company_name:"abc",
        company_id:100,
        drive_date:ISODate("2020-10-05")
    },
    {
        company_name:"TCS",
        company_id:101,
        drive_date:ISODate("2020-10-16")
    },
    {
        company_name:"infosys",
        company_id:102,
        drive_date:ISODate("2020-10-25")
    },
    {
        company_name:"CTS",
        company_id:103,
        drive_date:ISODate("2020-11-05")
    },
    {
        company_name:"hexaware",
        company_id:104,
        drive_date:ISODate("2020-10-21")
    },
    {
        company_name:"IBM",
        company_id:105,
        drive_date:ISODate("2021-10-29")
    },
    {
        company_name:"google",
        company_id:106,
        drive_date:ISODate("2020-10-30")
    },
    {
        company_name:"wipro",
        company_id:107,
        drive_date:ISODate("2020-04-19")
    },
    {
        company_name:"hcl",
        company_id:108,
        drive_date:ISODate("2020-10-17")
    },
    {
        company_name:"xyz",
        company_id:109,
        drive_date:ISODate("2022-12-11")
    },
    {
        company_name:"microsoft",
        company_id:110,
        drive_date:ISODate("2020-10-28")
    }
]

let students = [
    {
        name:"surya",
        stud_id:"stud-1",
        mentor_id:"m1",
        placement_id:100,
        company_name:"abc",
        absent:ISODate("2020-10-22")
    },
    {
        name:"parakash",
        stud_id:"stud-2",
        mentor_id:"m3",
        placement_id:0,
    },
    {
        name:"arthy",
        stud_id:"stud-3",
        mentor_id:"m2",
        placement_id:110,
        company_name:"hcl"
    },
    {
        name:"ajith",
        stud_id:"stud-4",
        mentor_id:"m2",
        placement_id:0,
    },
    {
        name:"vijay",
        stud_id:"stud-5",
        mentor_id:"m1",
        placement_id:102,
        company_name:"hcl",
    },
    {
        name:"pavithra",
        stud_id:"stud-6",
        mentor_id:"m4",
        placement_id:103,
        company_name:"google"
    },
    {
        name:"mahesh",
        stud_id:"stud-7",
        mentor_id:"m1",
        placement_id:0
    },
    {
        name:"vignesh",
        stud_id:"stud-8",
        mentor_id:"m1",
        placement_id:108,
        company_name:"google"
    },
    {
        name:"rajesh",
        stud_id:"stud-9",
        mentor_id:"m2",
        placement_id:106,
        company_name:"microsoft"
    },
    {
        name:"mahesh",
        stud_id:"stud-10",
        mentor_id:"m1",
        placement_id:0
    },
    {
        name:"bala",
        stud_id:"stud-11",
        mentor_id:"m1",
        placement_id:0
    },
    {
        name:"balaji",
        stud_id:"stud-12",
        mentor_id:"m1",
        placement_id:100,
        company_name:"microsoft"
    },
    {
        name:"muthu",
        stud_id:"stud-13",
        mentor_id:"m1",
        placement_id:0
    },
    {
        name:"kishore",
        stud_id:"stud-14",
        mentor_id:"m1",
        placement_id:108,
        company_name:"wipro"
    },
    {
        name:"gokul",
        stud_id:"stud-15",
        mentor_id:"m2",
        placement_id:107,
        company_name:"wipro"
    },
    {
        name:"arivu",
        stud_id:"stud-16",
        mentor_id:"m1",
        placement_id:109,
        company_name:"wipro"
    },
    {
        name:"sarath",
        stud_id:"stud-17",
        mentor_id:"m1",
        placement_id:108,
        company_name:"infosys"
    },
    {
        name:"pavithran",
        stud_id:"stud-18",
        mentor_id:"m5",
        placement_id:100,
        company_name:"TCS"
    },
    {
        name:"babu",
        stud_id:"stud-19",
        mentor_id:"m1",
        placement_id:0
    },
    {
        name:"saran",
        stud_id:"stud-20",
        mentor_id:"m1",
        placement_id:101,
        company_name:"CTS"
    },
    {
        name:"ram",
        stud_id:"stud-21",
        mentor_id:"m2",
        placement_id:100,
        company_name:"infosys"
    },
    {
        name:"saran ram",
        stud_id:"stud-22",
        mentor_id:"m1",
        placement_id:0
    },
    {
        name:"shanmuga raj",
        stud_id:"stud-23",
        mentor_id:"m1",
        placement_id:108,
        company_name:"CTS"
    },
    {
        name:"sarad",
        stud_id:"stud-24",
        mentor_id:"m2",
        placement_id:103,
        company_name:"hexaware"
    },
    {
        name:"thilak",
        stud_id:"stud-25",
        mentor_id:"m1",
        placement_id:0
    },
    {
        name:"sathish",
        stud_id:"stud-26",
        mentor_id:"m1",
        placement_id:108,
        company_name:"hexaware"
    },
    {
        name:"anbu",
        stud_id:"stud-27",
        mentor_id:"m3",
        placement_id:104,
        company_name:"HCL"
    },
    {
        name:"ragavan",
        stud_id:"stud-28",
        mentor_id:"m1",
        placement_id:0
    },
    {
        name:"santhosh",
        stud_id:"stud-29",
        mentor_id:"m1",
        placement_id:108,
        company_name:"wipro"
    },
    {
        name:"yeswanth",
        stud_id:"stud-30",
        mentor_id:"m2",
        placement_id:0
    },
    {
        name:"vidhya",
        stud_id:"stud-31",
        mentor_id:"m1",
        placement_id:108,
        company_name:"infosys"
    },
    {
        name:"swetha",
        stud_id:"stud-32",
        mentor_id:"m1",
        placement_id:105,
        company_name:"THIDIFF"
    },
    {
        name:"keerthana",
        stud_id:"stud-33",
        mentor_id:"m2",
        placement_id:109,
        company_name:"quads"
    },
    {
        name:"merlin",
        stud_id:"stud-34",
        mentor_id:"m1",
        placement_id:0
    },
    {
        name:"sankar",
        stud_id:"stud-35",
        mentor_id:"m1",
        placement_id:107,
        company_name:"abc"
    },
    {
        name:"venkatesh",
        stud_id:"stud-36",
        mentor_id:"m3",
        placement_id:0
    }
]

let codekata = [
    {
        name:"surya",
        problems_solved:100,
        codekata_id:10
    },
    {
        name:"arthy",
        problems_solved:260,
        codekata_id:11
    },
    {
        name:"pavithra",
        problems_solved:300,
        codekata_id:12
    },
    {
        name:"rajesh",
        problems_solved:76,
        codekata_id:13
    },
    {
        name:"muthu pandi",
        problems_solved:61,
        codekata_id:14
    }
]

let mentors = [
    {
        name:"sanjay",
        mentor_id:"m1"
    },
    {
        name:"vikram",
        mentor_id:"m2"
    },
    {
        name:"vignesh",
        mentor_id:"m3"
    },
    {
        name:"surya",
        mentor_id:"m4"
    },
    {
        name:"arthy",
        mentor_id:"m5"
    },
    {
        name:"jothi",
        mentor_id:"m6"
    }
]

let tasks = [
    {
      task: 'webcode',
      stud_id:"stud-2",
      details: 'webcode 1',
      date: ISODate("2023-08-01T00:00:00.000Z"),
      submitted:"yes"
    },
    {
      task: 'webcode',
      stud_id:"stud-3",
      details: 'webcode 2.',
      date: ISODate("2023-08-02T00:00:00.000Z"),
      submitted:"yes"
    },
    {
      task: 'html',
      stud_id:"stud-4",
      details: 'front end.',
      date: ISODate("2020-10-30T00:00:00.000Z"),
      submitted:"no"
    },
    {
      task: 'node js',
      stud_id:"stud-1",
      details: 'server.',
      date: ISODate("2020-10-22T00:00:00.000Z"),
      submitted:"no"
    },
    {
      task: 'mongodb',
      stud_id:"stud-5",
      details: 'database.',
      date: ISODate("2023-10-02T00:00:00.000Z"),
      submitted:"yes"
    },
    {
      task: 'react',
      stud_id:"stud-6",
      details: 'front end.',
      date: ISODate("2023-08-03T00:00:00.000Z"),
      submitted:"no"
    },
    {
      task: 'css',
      stud_id:"stud-7",
      details: 'style sheet.',
      date: ISODate("2023-11-01T00:00:00.000Z"),
      submitted:"yes"
    },
    {
      task: 'javascript',
      stud_id:"stud-8",
      details: 'scripting language.',
      date: ISODate("2023-10-02T00:00:00.000Z"),
      submitted:"yes"
    },
    {
      task: 'bootstrap',
      stud_id:"stud-9",
      details: 'css framework.',
      date: ISODate("2023-08-03T00:00:00.000Z"),
      submitted:"yes"
    }
  ]

  let taskuser = [
    {
        name:"surya",
        stud_id:"stud-1",
        mentor_id:"m1",
        placement_id:100,
        company_name:"abc",
        absent:ISODate("2020-10-22")
    },
    {
        name:"parkash",
        stud_id:"stud-2",
        mentor_id:"m3",
        placement_id:0,
        absent:ISODate("2022-01-01")
    },
    {
        name:"arthy",
        stud_id:"stud-3",
        mentor_id:"m2",
        placement_id:110,
        company_name:"hcl",
        absent:ISOdate("2015-10-10")
    },
    {
        name:"ajith",
        stud_id:"stud-4",
        mentor_id:"m2",
        placement_id:0,
        absent:ISODate("2020-10-29")
    },
    {
        name:"vijay",
        stud_id:"stud-5",
        mentor_id:"m1",
        placement_id:102,
        company_name:"hcl",
        absent:ISODate("2021-07-19")
    },
    {
        name:"pavithra",
        stud_id:"stud-6",
        mentor_id:"m4",
        placement_id:103,
        company_name:"google",
        absent:ISODate("2020-10-29")
    },
    {
        name:"mahesh",
        stud_id:"stud-7",
        mentor_id:"m1",
        placement_id:0,
        absent:ISODate("2020-10-29")
    },
    {
        name:"vignesh",
        stud_id:"stud-8",
        mentor_id:"m1",
        placement_id:108,
        company_name:"google",
        absent:ISODate("2021-11-02")
    },
    {
        name:"rajesh",
        stud_id:"stud-9",
        mentor_id:"m2",
        placement_id:106,
        company_name:"microsoft",
        absent:ISODate("2020-10-29")
    }
]

let topics = [
    {
        topic: "HTML",
        description: "hyper text markup language",
        date: ISODate("2023-08-01T00:00:00Z")
      },
      {
        topic: "CSS",
        description: "cascading style sheet",
        date: ISODate("2023-08-02T00:00:00Z")
      },
      {
        topic: "JS",
        description: "javascript",
        date: ISODate("2023-08-03T00:00:00Z")
      }
]
  