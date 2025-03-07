using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.UI.WebControls;
using System.Windows.Forms;

namespace HRMSDApp
{
    
    public partial class Employees : Form
    {
        Functions Con;
        //private readonly object DalySalTb;

        public object Salary { get; private set; }
        public object DalySalTb { get; private set; }

        public Employees()
        {
            InitializeComponent();
            Con = new Functions();
            ShowEmp();
            GetDepartment();
        }

        private void ShowEmp()
        {
            try
            {
                string Query = "Select * from EmployeeTb1";
                EmployeeList.DataSource = Con.GetData(Query);
            }
            catch (Exception)
            {
                throw;
            }
        }

        private void GetDepartment()
        {
            string Query = "Select * FROM DepartmentTb1";
            DepCb.DisplayMember = Con.GetData(Query).Columns["DepName"].ToString();
            DepCb.ValueMember = Con.GetData(Query).Columns["DepId"].ToString();
            DepCb.DataSource = Con.GetData(Query);


        }




        private void AddBTN_Click(object sender, EventArgs e)
        {
            try
            {
                if (EmpNameTb.Text == "" || GenCb.SelectedIndex == -1 || DepCb.SelectedIndex == -1 || DalySaltb.Text == "")
                {
                    MessageBox.Show("Missing data!!!");
                }
                else
                {
                    string Name = EmpNameTb.Text;
                    string Gender = GenCb.SelectedItem.ToString();
                    int Dep = Convert.ToInt32(DepCb.SelectedValue);
                    string DOB = DOBTb.Value.ToString();
                    string Jdate = JdateTb.Value.ToString();
                    int Salary = Convert.ToInt32(DalySaltb.Text);

                    string Query = "insert into EmployeeTb1 values('{0}', '{1}', '{2}', '{3}', '{4}', '{5}' )";
                    Query = string.Format(Query, Name, Gender, Dep, DOB, Jdate, Salary);
                    Con.SetData(Query);
                    ShowEmp();
                    MessageBox.Show("Employee Added!!!");
                    EmpNameTb.Text = "";
                    DalySaltb.Text = "";
                    GenCb.SelectedIndex = -1;
                    DepCb.SelectedIndex = -1;

                }
            }
            catch (Exception Ex)
            {
                MessageBox.Show(Ex.Message);
            }

        }


        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void label10_Click(object sender, EventArgs e)
        {
            Departments Obj = new Departments();
            Obj.Show();
            this.Hide();

        }

        private void Employees_Load(object sender, EventArgs e)
        {

        }

        private void label12_Click(object sender, EventArgs e)
        {
            Departments deptForm = new Departments(); // Create an instance of the Departments form
            deptForm.Show(); // Show the Departments form
            this.Hide(); // Hide the current Employees form

        }

        private void label11_Click(object sender, EventArgs e)
        {
            Salaries salForm = new Salaries(); // Create an instance of the Departments form
            salForm.Show(); // Show the Departments form
            this.Hide(); // Hide the current Employees form
        }

        private void pictureBox5_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox4_Click(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {
            Form1 Obj = new Form1();
            Obj.Show();
            this.Hide();
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {

        }

        private void label13_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox2_Click(object sender, EventArgs e)
        { 

        }


        private void DeleteBtn_Click(object sender, EventArgs e)
        {
            try
            {
                if (Key == 0)
                {
                    MessageBox.Show("Please select an employee to delete!!!");
                }
                else
                {
                    // Confirmation before deletion
                    DialogResult result = MessageBox.Show("Are you sure you want to delete this employee?", "Confirmation", MessageBoxButtons.YesNo, MessageBoxIcon.Warning);
                    if (result == DialogResult.Yes)
                    {
                        string Query = "Delete from EmployeeTb1 where EmpDep = {0}"; 
                        Query = string.Format(Query, Key);
                        Con.SetData(Query);
                        ShowEmp();
                        MessageBox.Show("Employee Deleted!!!");
                        EmpNameTb.Text = "";
                        DalySaltb.Text = "";
                        GenCb.SelectedIndex = -1;
                        DepCb.SelectedIndex = -1;
                        Key = 0;
                        
                    }
                }
            }

            catch (Exception Ex)
            {
                MessageBox.Show(Ex.Message);
            }

        }

        private void UpdateBTN_Click(object sender, EventArgs e)
        {
            try
            {
                if (EmpNameTb.Text == "" || GenCb.SelectedIndex == -1 || DepCb.SelectedIndex == -1 || DalySaltb.Text == "")
                {
                    MessageBox.Show("Missing data!!!");
                }
                else
                {
                    string Name = EmpNameTb.Text;
                    string Gender = GenCb.SelectedItem.ToString();
                    int Dep = Convert.ToInt32(DepCb.SelectedValue);
                    string DOB = DOBTb.Value.ToString();
                    string Jdate = JdateTb.Value.ToString();
                    int Salary = Convert.ToInt32(DalySaltb.Text);

                    string Query = "Update EmployeeTb1 set EmpName = '{0}',EmpGen = '{1}',EmpDep =  '{2}',EmpDOB = '{3}',EmpJDate = '{4}',EmpSal =  '{5}' where EmpId = '{6}'";
                    Query = string.Format(Query, Name, Gender, Dep, DOB, Jdate, Salary,Key);
                    Con.SetData(Query);
                    ShowEmp();
                    MessageBox.Show("Update Successful!!!");
                    EmpNameTb.Text = "";
                    DalySaltb.Text = "";
                    GenCb.SelectedIndex = -1;
                    DepCb.SelectedIndex = -1;

                }
            }
            catch (Exception Ex)
            {
                MessageBox.Show(Ex.Message);
            }

        }

        int Key = 0;
        private void EmployeeList_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            EmpNameTb.Text = EmployeeList.SelectedRows[0].Cells[1].Value.ToString();
            GenCb.Text = EmployeeList.SelectedRows[0].Cells[2].Value.ToString();
            DepCb.SelectedValue = EmployeeList.SelectedRows[0].Cells[3].Value.ToString();
            DOBTb.Text = EmployeeList.SelectedRows[0].Cells[4].Value.ToString();
            JdateTb.Text = EmployeeList.SelectedRows[0].Cells[5].Value.ToString();
            DalySaltb.Text = EmployeeList.SelectedRows[0].Cells[6].Value.ToString();

            //if (EmpNameTb.Text == "")
            //{
            //    Key = 0;
            //}
            //else
            //{
            //    Key = Convert.ToInt32(EmployeeList.SelectedRows[0].Cells[0].Value.ToString());
            //}

            if (EmployeeList.SelectedRows.Count > 0 && EmployeeList.SelectedRows[0].Cells[0].Value != null)
            {
                Key = Convert.ToInt32(EmployeeList.SelectedRows[0].Cells[0].Value);
            }
            else
            {
                Key = 0;
            }


        }
    }
}
