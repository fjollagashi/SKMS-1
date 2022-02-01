using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

#nullable disable

namespace Models {
    public partial class Parent {
        public Parent() {
            ParentsStudents = new HashSet<ParentsStudent>();
            }

        public Guid ParentId { get; set; }
        public string PhoneNumber { get; set; }

        [NotMapped]
        public string? Role { get; set; }

        public virtual User ParentNavigation { get; set; }
        public virtual ICollection<ParentsStudent> ParentsStudents { get; set; }
        }
    }
