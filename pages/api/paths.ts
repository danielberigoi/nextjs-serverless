// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({
    staticPaths: [
      { locale: "de", params: { canton: "basel-city", city: "all",   specialization: "psychologist", focus: "all" }},
      { locale: "de", params: { canton: "basel-city", city: "all",   specialization: "psychologist", focus: "addiction" } },
      { locale: "de", params: { canton: "basel-city", city: "basel", specialization: "psychologist", focus: "all" } },
      { locale: "de", params: { canton: "basel-city", city: "basel", specialization: "psychologist", focus: "addiction" } },

      { locale: "en", params: { canton: "basel-city", city: "all",   specialization: "psychologist", focus: "all" }},
      { locale: "en", params: { canton: "basel-city", city: "all",   specialization: "psychologist", focus: "addiction" } },
      { locale: "en", params: { canton: "basel-city", city: "basel", specialization: "psychologist", focus: "all" } },
      { locale: "en", params: { canton: "basel-city", city: "basel", specialization: "psychologist", focus: "addiction" } },

      { locale: "fr", params: { canton: "basel-city", city: "all",   specialization: "psychologist", focus: "all" }},
      { locale: "fr", params: { canton: "basel-city", city: "all",   specialization: "psychologist", focus: "addiction" } },
      { locale: "fr", params: { canton: "basel-city", city: "basel", specialization: "psychologist", focus: "all" } },
      { locale: "fr", params: { canton: "basel-city", city: "basel", specialization: "psychologist", focus: "addiction" } },

      { locale: "it", params: { canton: "basel-city", city: "all",   specialization: "psychologist", focus: "all" }},
      { locale: "it", params: { canton: "basel-city", city: "all",   specialization: "psychologist", focus: "addiction" } },
      { locale: "it", params: { canton: "basel-city", city: "basel", specialization: "psychologist", focus: "all" } },
      { locale: "it", params: { canton: "basel-city", city: "basel", specialization: "psychologist", focus: "addiction" } },
    ]
  });
}
