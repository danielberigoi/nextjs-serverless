const DoctorsList = () => {
  return <h1>It works!</h1>;
};

export const getStaticPaths = async (context) => {
  const categories = {
    canton: {
      de: ["basel-city", "zurich"],
      en: ["basel-city", "zurich"],
      fr: ["basel-city", "zurich"],
      it: ["basel-city", "zurich"],
    },
    city: {
      de: ["alle", "basel"],
      en: ["alle", "basel"],
      fr: ["alle", "basel"],
      it: ["alle", "basel"],
    },
    specialization: {
      de: ["dentist", "psychologist"],
      en: ["dentist", "psychologist"],
      fr: ["dentist", "psychologist"],
      it: ["dentist", "psychologist"],
    },
    focus: {
      de: ["all", "addiction"],
      en: ["all", "addiction"],
      fr: ["all", "addiction"],
      it: ["all", "addiction"],
    },
  };

  let paths = []

  for (const locale of context.locales) {
    const asd = []
    for (const [key, values] of Object.entries(categories)) {
      for (const [index, value] of values[locale].entries()) {
        asd[index] = { ...asd[index], locale, [key]: value }
      }
    }
    console.log(asd)
    paths = paths.concat(asd)
  }

  console.log(paths)

    // {
    //   locale: "de",
    //   params: {
    //     canton: "basel-city",
    //     city: "all",
    //     specialization: "psychologist",
    //     focus: "all",
    //   },
    // }

    // paths.push({ locale, params: { canton } })
  // }

  
  // let paths = Object.entries(categories).reduce((paths, [key, values]) => {
    
  //   for (const locale of context.locales) {
  //     for (const value of values[locale]) {
  //       console.log({ [key]: value })
  //       paths.push({ locale, params: { } })
  //     }
  //   }

  //   return paths;
  // }, [])

  // for (const locale of context.locales) {
  //   let asd = { }
  //   for (const [key, values] of Object.entries(categories)) {
  //     asd[key] = asd[key] || []
  //     for (const value of values[locale]) {
  //       asd[key].push(value)
  //     }
  //   }
  //   console.log(asd)
  // }

  // console.log(paths);

  return {
    paths: [
      {
        locale: "de",
        params: {
          canton: "basel-city",
          city: "all",
          specialization: "psychologist",
          focus: "all",
        },
      },
      {
        locale: "de",
        params: {
          canton: "basel-city",
          city: "all",
          specialization: "psychologist",
          focus: "addiction",
        },
      },
      {
        locale: "de",
        params: {
          canton: "basel-city",
          city: "basel",
          specialization: "psychologist",
          focus: "all",
        },
      },
      {
        locale: "de",
        params: {
          canton: "basel-city",
          city: "basel",
          specialization: "psychologist",
          focus: "addiction",
        },
      },

      {
        locale: "en",
        params: {
          canton: "basel-city",
          city: "all",
          specialization: "psychologist",
          focus: "all",
        },
      },
      {
        locale: "en",
        params: {
          canton: "basel-city",
          city: "all",
          specialization: "psychologist",
          focus: "addiction",
        },
      },
      {
        locale: "en",
        params: {
          canton: "basel-city",
          city: "basel",
          specialization: "psychologist",
          focus: "all",
        },
      },
      {
        locale: "en",
        params: {
          canton: "basel-city",
          city: "basel",
          specialization: "psychologist",
          focus: "addiction",
        },
      },

      {
        locale: "fr",
        params: {
          canton: "basel-city",
          city: "all",
          specialization: "psychologist",
          focus: "all",
        },
      },
      {
        locale: "fr",
        params: {
          canton: "basel-city",
          city: "all",
          specialization: "psychologist",
          focus: "addiction",
        },
      },
      {
        locale: "fr",
        params: {
          canton: "basel-city",
          city: "basel",
          specialization: "psychologist",
          focus: "all",
        },
      },
      {
        locale: "fr",
        params: {
          canton: "basel-city",
          city: "basel",
          specialization: "psychologist",
          focus: "addiction",
        },
      },

      {
        locale: "it",
        params: {
          canton: "basel-city",
          city: "all",
          specialization: "psychologist",
          focus: "all",
        },
      },
      {
        locale: "it",
        params: {
          canton: "basel-city",
          city: "all",
          specialization: "psychologist",
          focus: "addiction",
        },
      },
      {
        locale: "it",
        params: {
          canton: "basel-city",
          city: "basel",
          specialization: "psychologist",
          focus: "all",
        },
      },
      {
        locale: "it",
        params: {
          canton: "basel-city",
          city: "basel",
          specialization: "psychologist",
          focus: "addiction",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = () => {
  return { props: {} };
};

export default DoctorsList;
