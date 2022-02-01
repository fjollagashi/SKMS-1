using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

#nullable disable

namespace Models {
    public partial class Administrator {
        public Guid AdministratorId { get; set; }
        public string AcademicDegree { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }

        [NotMapped]
        public string? Role { get; set; }

        public virtual User AdministratorNavigation { get; set; }
        public virtual School School { get; set; }
        }
    }
