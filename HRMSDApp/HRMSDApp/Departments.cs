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
    public partial class Departments : Form
    {
        Functions Con;
        public Departments()
        {
            InitializeComponent();
            Con = new Functions();
            ShowDepartments();
        }

        private void ShowDepartments()
        {
            string Query = "Select * from DepartmentTb1";
            DepList.DataSource = Con.GetData(Query);
        }
        private void Departments_Load(object sender, EventArgs e)
        {

        }

        private void AddBtn_Click(object sender, EventArgs e)
        {
            try
            {
                if (DepNameTb.Text == "")
                {
                    MessageBox.Show("Missing data!!!");
                }
                else
                {
                    string Dep = DepNameTb.Text;
                    string Query = "insert into DepartmentTb1 values('{0}')";
                    Query = string.Format(Query, DepNameTb.Text);
                    Con.SetData(Query);
                    ShowDepartments();
                    MessageBox.Show("Department Added!!!");
                    DepNameTb.Text = "";

                }
            }
            catch (Exception Ex)
            {
                MessageBox.Show(Ex.Message);
            }


        }

        private void Button2_Click(object sender, EventArgs e)
        {
            try
            {
                if (DepNameTb.Text == "")
                {
                    MessageBox.Show("Missing data!!!");
                }
                else
                {
                    string Dep = DepNameTb.Text;
                    string Query = "Update DepartmentTb1 set DepName = '{0}' where DepId = '{1}' ";
                    Query = string.Format(Query, DepNameTb.Text, Key);
                    Con.SetData(Query);
                    ShowDepartments();
                    MessageBox.Show("Department Updated!!!");
                    DepNameTb.Text = "";
                    

                }
            }
            catch (Exception Ex)
            {
                MessageBox.Show(Ex.Message);
            }

        }

        int Key = 0;
        private void DepList_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            DepNameTb.Text = DepList.SelectedRows[0].Cells[1].Value.ToString();
            if (DepNameTb.Text == "")
            {
                Key = 0;
            }
            else
            {
                Key = Convert.ToInt32(DepList.SelectedRows[0].Cells[0].Value.ToString());
            }

        }

        private void Delete_Click(object sender, EventArgs e)
        {
            try
            {
                if (DepNameTb.Text == "")
                {
                    MessageBox.Show("Missing data!!!");
                }
                else
                {
                    DialogResult result = MessageBox.Show("Are you sure you want to delete this employee?", "Confirmation", MessageBoxButtons.YesNo, MessageBoxIcon.Warning);
                    string Dep = DepNameTb.Text;
                    string Query = "Delete from DepartmentTb1 where DepId = {0} ";
                    Query = string.Format(Query, Key);
                    Con.SetData(Query);
                    ShowDepartments();
                    MessageBox.Show("Department Deleted!!!");
                    DepNameTb.Text = "";
                    Key = 0;


                }
            }
            catch (Exception Ex)
            {
                MessageBox.Show(Ex.Message);
            }



        }

        private void EmpLb1_Click(object sender, EventArgs e)
        {
            Employees Obj = new Employees();
            Obj.Show();
            this.Hide();    

        }

        private void SalaryLb1_Click(object sender, EventArgs e)
        {
            Salaries Obj = new Salaries();
            Obj.Show();
            this.Hide();
        }

        private void label2_Click(object sender, EventArgs e)
        {
            Form1 Obj = new Form1();
            Obj.Show();
            this.Hide();
        }
    }
}


