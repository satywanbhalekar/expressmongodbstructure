const MensRanking= require('../models/mens');




async function addProjectDetails(body) {
    try {
        console.log('Inside addProjectDetails Dao');
        const addingMensRecords = new MensRanking(body);
        console.log(body);
        
        const data = await addingMensRecords.save();

        console.log('Project details added successfully:', data);
        return { data };
    } catch (err) {
        console.error('Error in addProjectDetails dao:', err);
        throw err;
    }
}

  
async function getAllProjectDetails() {
    try {
        console.log('Inside getAllProjectDetails Dao');
        
        // Fetch data and sort by ranking in ascending order
        const data = await MensRanking.find({}).sort({ "ranking": 1 });
        
        console.log('Fetched project details:', data);
        return { data };
    } catch (err) {
        console.error('Error in getAllProjectDetails dao:', err);
        throw err;
    }
}

  
  
//   router.get("/mens/:id", async (req, res) => {
//     try {
//       const _id=req.params.id;
//      const getMen= await MensRanking.findById(_id);
  
      
//       res.status(201).send(getMen);
//     } catch (e) {
     
//       res.status(400).send(e.message);
//     }
//   });
  
  
async function updateProjectDetails(id, body) {
    try {
        console.log('Inside updateProjectDetails Dao');

        // Find the document by ID and update it, returning the new document
        const data = await MensRanking.findByIdAndUpdate(id, body, { new: true });
console.log(data);
        // Check if the document was found and updated
        if (!data) {
            console.error('Error: Project not found');
            throw new Error('Project not found');
        }

        console.log('Updated project details:', data);
        return {data};
    } catch (err) {
        console.error('Error in updateProjectDetails dao:', err);
        throw err;
    }
}
  
  async function deleteProjectDetails (id) {
    try {
    //   const _id=req.params.id;
      console.log('Inside deleteProjectDetails Dao');
        const data = await MensRanking.findByIdAndDelete(id);
        if (!data) {
            console.error('Error: Project not found');
            throw new Error('Project Details not deleted');
        }
        
        console.log('Deleted project details:', data);
        return { data };
    } catch (err) {
        console.error('Error in deleteProjectDetails dao', err);
        throw err;
    }
}

  module.exports = {
    addProjectDetails,
    updateProjectDetails,
    deleteProjectDetails,
    getAllProjectDetails
};