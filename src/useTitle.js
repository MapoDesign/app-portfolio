const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Portfolio | ${title}`;
  }, [title]);
};

export default useTitle;
