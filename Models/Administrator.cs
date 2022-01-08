using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class Administrator
    {
        public Guid AdministratorId { get; set; }
        public string AcademicDegree { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }

        public virtual User AdministratorNavigation { get; set; }
        public virtual School School { get; set; }
    }
}
