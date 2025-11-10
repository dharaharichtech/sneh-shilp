import { blogPageImages } from "@/Helper/BlogPageHelper";

export const ContactSectionData = {
  ContactSection: {
    title: "Contact us for humanity donations",
    heading: "Bring a smile on their faces.",
    description:
      "To promote humanity, sponsorship, help through donations, partner with us and join as volunteer, please contact us at",
    boxes: [
      {
        id: 1,
        title: "Call Us",
        description: "+91 97232 22567 , +91 90544 91237",
      },
      {
        id: 2,
        title: "Email",
        description: "snehshilpfoundation@gmail.com",
      },
      {
        id: 3,
        title: "Address",
        description:
          "Snehshilp Foundation :SHILP 3, 3rd Floor, Sindhu bhavan road, Shilp circle, above bajarang grocery, Bodakdev, Ahmedabad, Gujarat 380059",
      },
    ],
    button: {
      text: "Contact Us",
      icon: blogPageImages.downArrow,
    },
  },

  JoinVolunteerSection: {
    title: "Join as Volunteer to Intern",
    fields: [
      {
        id: 1,
        label: "Your Name",
        name: "name",
        type: "text",
        placeholder: "",
      },
      {
        id: 2,
        label: "Email Id",
        name: "email",
        type: "email",
        placeholder: "",
      },
      {
        id: 3,
        label: "Mobile no.",
        name: "mobile",
        type: "text",
        placeholder: "",
      },
      {
        id: 4,
        label: "Subject",
        name: "Subject",
        type: "text",
        placeholder: "",
      },
      {
        id: 5,
        label: "Your Message",
        name: "message",
        type: "textarea",
        placeholder: "",
      },
    ],
    button: {
      text: "Submit",
      icon: blogPageImages.Arrow,
    },
  },
};