import Image from "next/image";
const Home = () => {
  return (
    <div className=" flex flex-col justify-items-center text-center items-center">
      <div>
        <h1 className=" font-bold">Introduction</h1>
        <p>
          WK app (also known as work management app) is a useful tool for
          individuals, teams, and organizations to manage and track their work
          progress. This app makes managing tasks easier and more efficient,
          from planning and dividing tasks among team members to monitoring
          progress and completing projects. WK app allows users to create task
          lists, prioritize and set deadlines for each task. It also enables
          users to assign tasks to team members and track their progress.
          Additionally, the software provides tools for communication, document
          sharing, and collaboration with team members. WK app also supports
          creating Gantt charts, planning, scheduling, and tracking project
          progress. This helps users manage and track a project more
          comprehensively. With task management software, individuals and
          organizations can manage their work more effectively, save time, and
          increase productivity. It is a useful tool for both small and large
          projects, from managing personal projects to managing the projects of
          an entire company.
        </p>
      </div>
      <h1 className="font-bold mt-5">How to use app</h1>
      <p className="mt-3">Click icon app</p>
      <Image
        src={"/images/howtouse/photo_1_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">Use google account to login to the app</p>
      <Image
        src={"/images/howtouse/photo_2_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>
      <Image
        src={"/images/howtouse/photo_3_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">
        Once logged in successfully you will go to the screen to create the
        board
      </p>
      <p className="mt-1">
        As shown in the picture you can see that you already have a previously
        created board named "Thi ck"
      </p>
      <Image
        src={"/images/howtouse/photo_14_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">
        To be able to understand clearly what a board is? You can see the
        picture below.
      </p>
      <Image
        src={"/images/howtouse/structure.drawio.png"}
        width={250}
        height={250}
      ></Image>
      <p className="mt-1">
        A board will represent your project. In a board there will be many
        tables similar to the parts of the project In a table there are also
        tasks equivalent to the work to be done to complete that part of the
        project
      </p>

      <p className="mt-3">
        You will need to enter the board name to create the board
      </p>
      <p className="mt-3">Here I will name the board as Learn Nextjs</p>
      <Image
        src={"/images/howtouse/photo_12_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>
      <Image
        src={"/images/howtouse/photo_5_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">
        In the board you can invite others to join your board
      </p>
      <Image
        src={"/images/howtouse/photo_8_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">You have successfully created a new board</p>
      <p className="mt-1">There are currently no tables in this board</p>
      <p className="mt-1">So now we're going to create the table</p>
      <p className="mt-1">Click that button</p>
      <Image
        src={"/images/howtouse/photo_7_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">
        This button will contain functions such as editing boards, adding tables
        or managing labels
      </p>
      <p className="mt-1">Here we will choose to add new table</p>
      <Image
        src={"/images/howtouse/photo_6_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">
        Similarly when creating a board we also need to enter the name of the
        table, and the table description, you can also add people to this table.
      </p>
      <Image
        src={"/images/howtouse/photo_4_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">
        I will name this table "Learn tutorial", and describe it as "learn on
        Youtube".
      </p>
      <Image
        src={"/images/howtouse/photo_10_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>
      <p className="mt-3">Now we have the table "Learn tutorial"</p>
      <Image
        src={"/images/howtouse/photo_9_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">
        We will click add new task to add a task to the table
      </p>
      <p className="mt-1">
        I will create 2 tasks "what video" and "code follow video", both of
        these tasks will be set up by me
      </p>
      <Image
        src={"/images/howtouse/photo_11_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>
      <Image
        src={"/images/howtouse/photo_16_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">Now we have 2 tasks</p>
      <Image
        src={"/images/howtouse/photo_15_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>
      {/* <Image
        src={"/images/howtouse/photo_17_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image> */}
      {/* <Image
        src={"/images/howtouse/photo_18_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image> */}
      <p className="mt-1">
        After completing these tasks, you can click on the task to edit its
        status
      </p>
      <Image
        src={"/images/howtouse/photo_19_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>
      <Image
        src={"/images/howtouse/photo_22_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">
        You can click on the chart to see the analysis of this board
      </p>
      <Image
        src={"/images/howtouse/photo_21_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">
        The first chart will show the 5 people who completed the most tasks in
        the board
      </p>
      <p className="mt-1">
        Here, since I'm the only one in the board, the chart will only have one
        column
      </p>
      <Image
        src={"/images/howtouse/photo_20_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">
        The second chart will show the correlation between your tasks
      </p>
      <p className="mt-1">
        Here I have a task in progress and a task completed
      </p>
      <Image
        src={"/images/howtouse/photo_25_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">
        The final chart will summarize all the tasks of everyone on the board
      </p>
      <Image
        src={"/images/howtouse/photo_24_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      {/* <Image
        src={"/images/howtouse/photo_26_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image> */}

      <p className="mt-3">
        On the messaging screen you can message everyone on the board
      </p>
      <Image
        src={"/images/howtouse/photo_27_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>

      <p className="mt-3">
        In the settings screen you can share the app with your friends or
        family, you can also report bugs if you encounter them.
      </p>
      <Image
        src={"/images/howtouse/photo_23_2023-06-14_13-35-41.jpg"}
        width={200}
        height={200}
      ></Image>
      <p className="mt-3">Thank you for using our app, have fun working!</p>
    </div>
  );
};

export default Home;
