const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Create monthly sales performance report.",
        taskDate: "2026-02-15",
        category: "Sales",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Attend meeting with ABC client.",
        taskDate: "2026-02-10",
        category: "Meeting",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update CRM",
        taskDescription: "Update outdated customer records.",
        taskDate: "2026-02-08",
        category: "Management",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create UI design for new product.",
        taskDate: "2026-02-16",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve responsiveness issue.",
        taskDate: "2026-02-12",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Logo",
        taskDescription: "Revise logo colors as per brand guide.",
        taskDate: "2026-02-18",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prototype Review",
        taskDescription: "Review prototype with product team.",
        taskDate: "2026-02-09",
        category: "Review",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Perform weekly backup.",
        taskDate: "2026-02-17",
        category: "IT",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server Maintenance",
        taskDescription: "Routine server checkup.",
        taskDate: "2026-02-11",
        category: "IT",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Security Patch",
        taskDescription: "Install latest security updates.",
        taskDate: "2026-02-19",
        category: "Security",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Blog Post",
        taskDescription: "Draft article for company website.",
        taskDate: "2026-02-20",
        category: "Content",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Social Media Plan",
        taskDescription: "Plan posts for next week.",
        taskDate: "2026-02-14",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Campaign",
        taskDescription: "Launch promotional email campaign.",
        taskDate: "2026-02-13",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website SEO ranking.",
        taskDate: "2026-02-22",
        category: "SEO",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Recruitment Screening",
        taskDescription: "Screen job applications.",
        taskDate: "2026-02-18",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Interview Scheduling",
        taskDescription: "Schedule candidate interviews.",
        taskDate: "2026-02-12",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Policy Update",
        taskDescription: "Update company leave policy document.",
        taskDate: "2026-02-07",
        category: "Administration",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin',JSON.stringify(admin))
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  console.log(employees,admin)

  return { employees, admin };
};
