using System;
using System.Collections.Generic;

#nullable disable

namespace Models
{
    public partial class Parent
    {
        public Parent()
        {
            ParentsStudents = new HashSet<ParentsStudent>();
        }

        public Guid ParentId { get; set; }
        public string PhoneNumber { get; set; }

        public virtual User ParentNavigation { get; set; }
        public virtual ICollection<ParentsStudent> ParentsStudents { get; set; }
    }
}
