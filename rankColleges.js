function rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight) {
    // Filter colleges
    
    const filteredColleges = colleges.filter(college => 
      college.location === preferredLocation && college.fees <= maxFees
    );
  
    const scoredColleges = filteredColleges.map(college => {
      const score = (college.ranking * rankingWeight) + 
                    ((college.fees / maxFees) * feesWeight);
      return {
        ...college,
        score: +score.toFixed(2)
      };
    });
  
    scoredColleges.sort((a, b) => a.score - b.score);
  
    return scoredColleges;
  }
  
  // College data
  const colleges = [
    { name: "College A", location: "New York", fees: 20000, ranking: 1 },
    { name: "College B", location: "California", fees: 15000, ranking: 2 },
    { name: "College C", location: "New York", fees: 25000, ranking: 3 },
    { name: "College D", location: "New York", fees: 10000, ranking: 4 }
  ];
  
  // User preferences
  const preferredLocation = "New York";
  const maxFees = 20000;
  const rankingWeight = 2;
  const feesWeight = 1;
  
  const rankedColleges = rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight);
  
  // Results
  rankedColleges.forEach(college => {
    console.log(`Name: ${college.name}, Location: ${college.location}, Fees: ${college.fees}, Ranking: ${college.ranking}, Score: ${college.score}`);
  });  