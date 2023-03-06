type TechSkillsProps = {
  allTech: string[];
  classname: string;
};

export const TechSkills = ({ allTech, classname }: TechSkillsProps) => (
  <div className={classname}>
    {allTech.map((tech) => (
      <span
        key={tech}
        className="m-1.5 text-sm h-8 rounded bg-gray-500 bg-opacity-5 flex justify-center items-center px-3"
      >
        {tech}
      </span>
    ))}
  </div>
);
