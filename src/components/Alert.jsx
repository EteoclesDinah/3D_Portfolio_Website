const Alert = ({ type, text }) => {
  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
        <div 
          className={`p-2 ${
            type === 'danger' ? 'bg-red-800' : 'bg-blue-800'
            } text-indigo-100 leading-none flex lg:inline-flex items-center`} 
            role='alert'
        >
            <p 
              className={`flex rounded-full${
                type === 'danger' ? 'bg-red-500' : 'bg-blue-800'
                } uppercase px-2 py-1 font-semibold mr-3 text-xs`}
            >
              {type === 'danger' ? 'Failed' : 'Success'}
            </p>
            <p className='mr-2 text-left'>{text}</p>
        </div>
    </div>
  );
};

export default Alert;