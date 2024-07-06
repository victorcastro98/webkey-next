const Card: React.FC<{
  list?: Array<string>;
  title?: string;
}> = (props) => {
  return (
      <div className="lg:w-2/3 w-[90%] h-[500px] h-fit text-center gap-2 border-2 p-4 
      border-web-green bg-dark text-light lg:m-6 my-6 rounded-lg items-center justify-center flex flex-col">
        <div className="text-6xl font-semibold mb-4">{props.title}</div>
        <ul className="text-xl flex flex-col justify-evenly h-[80%] lg:w-[80%] font-medium list-disc list-inside">
            {props.list?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
      </div>
  );
};

export default Card;
