export default (form) => {
  const errors = {};

  if (!form.name) {
    errors.name = "Name is required";
  }
  if (form.name.length > 15) {
    errors.name = "The name exceeds the length";
  }
  if (!form.difficulty) {
    errors.difficulty = "Difficulty is required";
  }
  if (!form.duration) {
    errors.duration = "Duration is required";
  }
  if (!form.season) {
    errors.season = "Season is required";
  }
  if (form.countries.length === 0) {
    errors.countries = "At least one country must be selected";
  }

  return errors;
};
